class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.integer :Table_no
      t.string :food_name
      t.integer :price

      t.timestamps
    end
  end
end
