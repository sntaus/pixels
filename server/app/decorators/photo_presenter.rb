class PhotoPresenter
  attr_reader :photo, :photo_obj

  def initialize(photo)
    @photo = photo
    @photo_obj = {}
    process
  end

  def process
    @photo_obj['user'] = {
        'fullName' => @photo['user']['fullName'],
        'avatar' => @photo['user']['userpic_url'],
        'username' => @photo['user']['username']
    }

    @photo_obj['url'] = @photo['image_url']
    @photo_obj['link'] = @photo['url']
    @photo_obj['liked'] = @photo['liked']
  end

  def as_json
    @photo_obj.as_json
  end
end