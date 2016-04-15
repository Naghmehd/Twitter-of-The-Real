class HomeController < ApplicationController

  skip_before_action :authenticate_user

  def dashboard
    @tweets = Tweet.all
  end

end
