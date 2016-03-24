require 'test_helper'

class PhotoControllerTest < ActionController::TestCase
  test "should get all" do
    get :all
    assert_response :success
  end

  test "should get one" do
    get :one
    assert_response :success
  end

end
