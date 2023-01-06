class Spot < ApplicationRecord
    def lat_lng
        {lat: self.lat, lng: self.lng}
    end
end
