---
title: Strong Parameters in Rails 4
keywords: ruby, rails, rails 4, action_controller, strong_parameters
description: |
  With the advent of rails 4, the way we can protect our self from malicious user input have changed quite drastically. Check here on my take of how to best approach this changes.
tags: ruby, rails, rspec
---

With `strong_parameters` taking the place of `attr_accessible` in Rails 4, we need to update our approach in protecting our data from malicious user input. Protecting model against mass assignment is now no longer the job of the model layer. In a way, this new approach is more flexible and certainly helps solving several long live problem with the way `attr_accessible` works, e.g protecting different set of attributes based on who the user is, admin? or user?.

It works pretty much like this. The `params` object, now have a special method called `require`, that will check if a certain hash key exist and permit, that will filter out unwanted keys from the parameters. All in all, it will look pretty much like this

```rb
def create
  @article = Article.create article_params
end

private

  def article_params
    params.require(:article).permit(:title, :content)
  end
```

This works pretty well. Using this approach, we can have different set of allowed attributes on different controller for the same model, and since we're in the controller, we have access to the session, and we can check for user permission easily.

But, how can we test it? Now, everybody who works with Rails knows, that along with the project growth, the time it takes to run the test suites will get longer and longer. It is very important to write your test so that you're not over testing. We can't write multiple controller test with different parameters, simply for the purpose of testing if a certain variable is allowed or not. So how can we address this?

My approach in addressing this, is in making a collection of what i call ParamsObject, for organization wise, let's put it under `/app/params`. For example, for an article it would look like this

```rb
class ArticleParams
  def initialize params
    @params = params
  end

  def build
    @params.require(:article).permit(:title, :content)
  end
end
```

and we can change the controller to

```rb
def article_params
  ArticleParams.new(params).build
end
```

Now, having been extracted to it's own class, we can simply test the class, instead of the full controller. With `rspec` and `factory_girl`, start by making `article_params_spec.rb` under `spec/params` like so

```rb
require "spec_helper"

describe ArticleParams do
  let(:valid_params) { FactoryGirl.attributes_for(:article) }
  subject {
    ArticleParams.new(
      ActionController::Parameters.new(admin: valid_params)
    )
  }

  it "should return the same value" do
    expect(subject.build).to eq(valid_params.stringify_keys)
  end
end
```

and to test against malicious input, we can simply modify the `valid_params` and make it invalid, keeping in mind that let and subject block are lazily evaluated when they are being called, we can do something like

```rb
it "should guard against unwanted params" do
  valid_params.merge! unwanted: "params"

  inner_params = subject.instance_variable_get "@params"
  expect(inner_params[:article][:unwanted]).to eq("params")

  expect(subject.build["unwanted"]).to be_blank
end
```

By using this kind of approach, you can really go wild in protecting your Model against mass assignment. Pass in additional information into the ParamObject, the `current_user`, the `action_name`, anything you need and use it to decide which attributes should be allowed, all in while keeping your Controller and Model nice and clean.

Also, as an added bonus, we can run all params checking test with

```
rake spec:params
```

Have a thought? Feel free to leave some comments. :)
