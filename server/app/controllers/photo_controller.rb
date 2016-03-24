class PhotoController < ApplicationController
  def all
    obj = ActiveSupport::JSON.decode("{\"team\":[\"rails\", \"tad\"],\"players\":36}")

    render :text => (obj['team'][1])
  end

  def one
  end
end
