class SpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat_lng, :about, :style
end
