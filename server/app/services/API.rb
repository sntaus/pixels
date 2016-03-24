require 'net/http'
class API
  def self.get_popular
    config = Rails.configuration.API # API configuration
    popular_photos_str = Net::HTTP.get(URI.parse(config[:base_url] + 'v1/photos?feature=popular&rpp=100&image_size=3&consumer_key=' + config[:consumer_key]))
    popular_photos = ActiveSupport::JSON.decode(popular_photos_str)
    return popular_photos['photos']
  end
end