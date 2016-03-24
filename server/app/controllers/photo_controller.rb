class PhotoController < ApplicationController
  def all
    popular_photos = GalleryPresenter.new(API.get_popular)
    render :json => popular_photos.as_json
  end

  def one
  end
end
