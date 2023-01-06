class User < ApplicationRecord
    has_secure_password
    has_one_attached :photo 
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, unless: -> { self.id !=nil }
    validates :password_confirmation, presence: true, unless: -> { self.id != nil }

    def photo_url
        Rails.application.routes.url_helpers.url_for(photo) if photo.attached?
    end
end
