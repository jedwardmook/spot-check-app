class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errrors: e.record.errors.full_message }, status: :unprocessable_entity
    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
