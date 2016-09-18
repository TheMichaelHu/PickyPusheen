# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160918031347) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title",                      null: false
    t.text     "description",                null: false
    t.integer  "category_id",                null: false
    t.integer  "max_size",    default: 1,    null: false
    t.boolean  "is_nerd"
    t.boolean  "has_face"
    t.integer  "level"
    t.boolean  "visible",     default: true
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "activities", ["user_id", "category_id"], name: "index_activities_on_user_id_and_category_id", using: :btree

  create_table "buttons", force: :cascade do |t|
    t.string   "button_slug", null: false
    t.integer  "user_id"
    t.integer  "template_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "buttons", ["user_id", "button_slug"], name: "index_buttons_on_user_id_and_button_slug", using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "swipes", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "activity_id"
    t.boolean  "yes"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "swipes", ["user_id", "activity_id"], name: "index_swipes_on_user_id_and_activity_id", using: :btree

  create_table "templates", force: :cascade do |t|
    t.integer  "button_id"
    t.string   "title",                      null: false
    t.text     "description",                null: false
    t.integer  "category_id",                null: false
    t.integer  "max_size",    default: 1,    null: false
    t.boolean  "is_nerd"
    t.boolean  "has_face"
    t.integer  "level"
    t.boolean  "visible",     default: true
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "templates", ["button_id", "category_id"], name: "index_templates_on_button_id_and_category_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
