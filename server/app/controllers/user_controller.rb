class UserController < ApplicationController
  def login
    user_login = API.login(params[:username], params[:password])
    if !user_login
      render :json => {:success => false}
    else
      render :json => user_login.params
    end
  end
end
