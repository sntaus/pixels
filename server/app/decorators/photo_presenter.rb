class PhotoPresenter
  attr_reader :photo, :photo_obj

  def initialize(photo)
    @photo = photo
    @photo_obj = {}
    process
  end

  def process
    @photo_obj['user'] = {
        'fullname' => @photo['user']['fullname'],
        'avatar' => @photo['user']['userpic_url'],
        'username' => @photo['user']['username']
    }

    @photo_obj['url'] = @photo['image_url']
    @photo_obj['link'] = @photo['url']
    @photo_obj['liked'] = @photo['liked']
    @photo_obj['name'] = @photo['name']
    @photo_obj['description'] = @photo['description']
  end

  def as_json
    @photo_obj.as_json
  end
end