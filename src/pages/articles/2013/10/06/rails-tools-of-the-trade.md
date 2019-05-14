---
title: Rails Tools of the Trade
keywords: ruby, rails, tools, beginner, getting started, 960.js, compass, foundation, devise, doorkeeper, paperclip, carrierwave
description: |
  There are endless library you can choose to help you in developing a Ruby on Rails application. Here you can find my list of preferences. What's yours?
tags: ruby, rails, rspec
---

In developing a Ruby on Rails application, and in coding in general you often find that you're implementing the same feature multiple times across many different projects. Developer all over the world has been trying to find the best way to avoid this repetition by making sure that the code we write is reusable. Ruby tried to fixed this by having a gem, a platform to share your opensource library for other to use and collaborate upon. Being a Ruby on Rails programmer, having the knowledge of what gem is available and which can you use to solve a certain problem is very important. Here, I'm sharing my tools of the trade, gem that I found myself keep using on the projects that I'm involved in. Keep yourself updated, and find better alternative using site like [The Ruby Toolbox](https://www.ruby-toolbox.com/).

### Styling it Up With Foundation

Even the simplest site have some css styling it up. There are a lot of good css framework available : such as [960.gs](http://960.gs/), [blueprint](http://www.blueprintcss.org/), [compass](http://compass-style.org/), [bootstrap](http://getbootstrap.com/), and much more; but, my favorite one is [foundation](http://foundation.zurb.com/). 960.gs and blueprint is lacking needed feature. compass provides some useful helpers, especially in working with css3, but some effort is required to get started with it. bootstrap is nice, but it have to much styling baked into it, that you will find yourself canceling out existing style. foundation on the other hand, have the enough amount of necessary feature, and you can always choose which one you want to include. It also have a nice set of icon fonts! Add `gem 'zurb-foundation'` and `gem 'foundation-icons-sass-rails'`, to your `Gemfile` to get started.

### Authenticating Your User With Devise

From the old days of [acts_as_authenticated](https://github.com/gundestrup/acts_as_authenticated), to the days of [restful_authentication](http://github.com/technoweenie/restful-authentication), to the more mature gem [devise](https://github.com/plataformatec/devise). Authenticating user is something that can be said always be a feature of your site. With years of growth, and numerous configurable feature from validation, confirming email, locking account on malicious attempt, to linking your account with 3rd party provider using omniauth, devise has been the defacto tool to be used.

### Securing Your API Services With Doorkeeper

Reach broader audience by providing API services, either to your own API client on Android or iPhone, or to 3rd party developers. Even though there are multiple way you can choose to securing the access, OAuth 2 has been the one approach that is used all over. Luckily, for us Ruby on Rails developer, there's a gem called [doorkeeper](https://github.com/applicake/doorkeeper) that can help us easily set our API up, to become a full fledge OAuth service provider.

### File Upload With Paperclip and Carrierwave

Now.. I'm still struggling with this one, both [paperclip](https://github.com/thoughtbot/paperclip) and [carrierwave](https://github.com/carrierwaveuploader/carrierwave), are great library for receiving file upload. Both have pretty much the same support for features such as, validation, image post processing, choosing different backend for storage (file, database, s3), and loads others; and both offer a certain configurable flexibility. What different is the approach that is used. Paperclip put the configuration directly in the Model, while carrierwave put them in an special Uploader class. Being so, paperclip require less code to implement, while carrierwave is considered to be cleaner.

These are some of the numerous available gem that I found myself keep using. How about you?
