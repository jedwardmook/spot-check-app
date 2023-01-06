class SpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :lng, :about, :lat_lng
end
