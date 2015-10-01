class Item < ActiveRecord::Base
  scope :active, -> {where(completed: false)}
  scope :completed, -> {where(completed: true) }
end
