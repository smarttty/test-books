<?php

use Illuminate\Database\Seeder;
use App\Book;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::truncate();
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Book::create([
                'genre' => $faker->unique()->domainName,
                'author' => $faker->name,
                'name' => $faker->city,
                'year' => $faker->year('now'),
            ]);
        }
    }
}
