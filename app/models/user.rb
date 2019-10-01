# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  role            :string           not null
#  description     :text
#  pronouns        :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord 

    #FIGVAPER

    validates :first_name, :last_name, :role, :password_digest, presence: true 
    validates :email, :session_token, presence: true, uniqueness: true 
    validates :password, length: { minimum: 8, allow_nil: true }
    after_initialize :ensure_session_token 
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user 
        else 
            nil 
        end 
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def self.generate_session_token 
        SecureRandom::urlsafe_base64
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end 

    def reset_session_token! 
        self.session_token = self.class.generate_session_token
        self.save! 
        self.session_token
    end 

end 
