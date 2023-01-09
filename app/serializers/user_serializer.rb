class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :bio, :photo, :photo_url

  include Rails.application.routes.url_helpers

  def photo_url
    "http://localhost:3000" + rails_blob_path(object.photo, only_path: true) if object.photo.attached?
  end

end
