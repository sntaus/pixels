require 'API'

class PhotoController < ApplicationController

  # Get all photos
  # route: /photo/all
  def all
    popular_photos_obj = API.get_popular
    if popular_photos_obj['error'].nil?
      popular_photos = GalleryPresenter.new(popular_photos_obj['photos'])
      render :json => popular_photos.as_json
    else
      render :json => popular_photos_obj
    end

  end

  # Get details of one photo (without access token)
  # route: /photo/one
  def one
    photo_obj = API.get_one(params[:id])
    if photo_obj['error'].nil?
      photo = PhotoPresenter.new(photo_obj['photo'])
      render :json => photo.as_json
    else
      render :json => photo_obj
    end
  end

  # Get details of one photo (with access token)
  # route: /photo/authorized
  def authorized
      photo_obj = API.get_one(params[:id], true, params[:access_token], params[:token_secret])
      if photo_obj['error'].nil?
        photo = PhotoPresenter.new(photo_obj['photo'])
        render :json => photo.as_json
      else
        render :json => photo_obj
      end
  end

  # Like a photo from a user's account
  # route: /photo/like
  def like
    like = API.like(params[:id], params[:access_token], params[:token_secret])
    if like['photo'].nil?
      render :json => like
    else
      render :json => {success: true}
    end
  end

end
