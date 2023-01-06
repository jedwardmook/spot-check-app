class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :bio, :photo, :photo_url
end
