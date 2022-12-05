User.destroy_all
User.reset_pk_sequence

puts "seeding"

    User.create(username: "johnemook", password: "pAsswort816", password_confirmation: "pAsswort816")

puts "seeded"