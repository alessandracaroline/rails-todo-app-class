class ChangeCompletedOnItems < ActiveRecord::Migration
  def change
    change_column :items, :completed, :boolean, :default => true
  end
end
