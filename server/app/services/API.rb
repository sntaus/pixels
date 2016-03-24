require 'net/http'
require 'oauth'

class API
  def self.get_popular
    config = Rails.configuration.API # API configuration
    popular_photos_str = Net::HTTP.get(URI.parse(config[:base_url] + 'v1/photos?feature=popular&rpp=100&image_size=3&consumer_key=' + config[:consumer_key]))
    popular_photos = JSON.parse(popular_photos_str)
    return popular_photos
  end

  def self.get_one(id, authorized = false, access_token = '', token_secret = '')
    config = Rails.configuration.API # API configuration
    if authorized
      consumer = OAuth::Consumer.new(config[:consumer_key], config[:consumer_secret], {
          :site => config[:base_url]})
      access_token = OAuth::AccessToken.new(consumer, access_token, token_secret)
      photo_str = access_token.get('/v1/photos/' + id.to_s).body
    else
      url = config[:base_url] + '/v1/photos/' + id + '?consumer_key=' + config[:consumer_key]
      photo_str = Net::HTTP.get(URI.parse(url))
    end

    photo = JSON.parse(photo_str)
    return photo
  end

  def self.like(id, access_token = '', token_secret = '')
    config = Rails.configuration.API # API configuration
    consumer = OAuth::Consumer.new(config[:consumer_key], config[:consumer_secret], {
        :site => config[:base_url]})
    access_token = OAuth::AccessToken.new(consumer, access_token, token_secret)
    return JSON.parse(access_token.post('/v1/photos/' + id.to_s + '/vote?vote=1').body);
  end

  def self.login(username, password)
    config = Rails.configuration.API
    consumer = OAuth::Consumer.new(config[:consumer_key], config[:consumer_secret], {
        :site => config[:base_url],
        :request_token_path => '/v1/oauth/request_token',
        :access_token_path => '/v1/oauth/access_token',
        :authorize_path => '/v1/oauth/authorize'})

    request_token = consumer.get_request_token()
    begin
      access_token = consumer.get_access_token(request_token, {}, { :x_auth_mode => 'client_auth', :x_auth_username => username, :x_auth_password => password })
      return access_token
    rescue => ex
      return false
    end

  end

end