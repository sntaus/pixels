class PhotoController < ApplicationController
  def all
    render :text => API.get_popular
  end

  def one
  end
end
