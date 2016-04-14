# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do
  user = User.create!(username: Faker::Internet.user_name('Nancy'),
                      password: "password")
      3.times do
        tweets = Tweet.create!(message: Faker::Lorem.sentences(1),
                              user_id: user.id)
      end
end
