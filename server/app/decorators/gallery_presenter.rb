class GalleryPresenter
  attr_reader :gallery, :gallery_obj

  def initialize(gallery)
    @gallery = gallery
    @gallery_obj = []
    process
  end

  # Create an array of URLs and IDs of images
  def process
    @gallery.each do |item|
      photo = {}
      photo[:url] = item['images'][0]['url']
      photo[:id] = item['id']
      @gallery_obj.push(photo)
    end
  end

  # as_json for decorated object
  def as_json
    @gallery_obj.as_json
  end
end