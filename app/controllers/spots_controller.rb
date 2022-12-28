class SpotsController < ApplicationController

    def create
        spot = Spot.create!(spot_params)
        render json: spot, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errrors: e.record.errors.full_message }, status: :unprocessable_entity
    end

    def index 
        spots = Spot.all
        render json: spots
    end
    
    private 

    def spot_params
        params.permit(:name, :lat_lng, :about, :style)
    end

end