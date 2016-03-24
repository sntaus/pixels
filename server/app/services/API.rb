require 'net/http'
class API
  def self.get_popular
    config = Rails.configuration.API
    Net::HTTP.get(URI.parse(config[:base_url] + 'v1/photos?feature=popular&consumer_key=' + config[:consumer_key]))

  end
end