class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :bio, :photo
end
