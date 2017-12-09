
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {
          car_id: 1,
          link: 'https://s3.amazonaws.com/cartool/white_honda_accord_1.jpg'
        },
        {
          car_id: 1,
          link: 'https://s3.amazonaws.com/cartool/white_honda_accord_2.jpg'
        },
        {
          car_id: 2,
          link: 'https://s3.amazonaws.com/cartool/gray_honda_civic_1.jpg'
        },
        {
          car_id: 2,
          link: 'https://s3.amazonaws.com/cartool/gray_honda_civic_2.jpg'
        },
        {
          car_id: 3,
          link: 'https://s3.amazonaws.com/cartool/white_honda_odyssey_1.jpg'
        },
        {
          car_id: 3,
          link: 'https://s3.amazonaws.com/cartool/white_honda_odyssey_2.jpg'
        },
        {
          car_id: 4,
          link: 'https://s3.amazonaws.com/cartool/gray_honda_crv_1.jpg'
        },
        {
          car_id: 4,
          link: 'https://s3.amazonaws.com/cartool/gray_honda_crv_2.jpg'
        },
        {
          car_id: 5,
          link: 'https://s3.amazonaws.com/cartool/white_honda_hrv_1.jpg'
        },
        {
          car_id: 5,
          link: 'https://s3.amazonaws.com/cartool/white_honda_hrv_2.jpg'
        },
        {
          car_id: 6,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_4runner_1.jpg'
        },
        {
          car_id: 6,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_4runner_2.jpg'
        },
        {
          car_id: 7,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_avalon_1.jpg'
        },
        {
          car_id: 7,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_avalon_2.jpg'
        },
        {
          car_id: 8,
          link: 'https://s3.amazonaws.com/cartool/black_toyota_camry_1.jpg'
        },
        {
          car_id: 8,
          link: 'https://s3.amazonaws.com/cartool/black_toyota_camry_2.jpg'
        },
        {
          car_id: 9,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_tocoma_1.jpg'
        },
        {
          car_id: 9,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_tocoma_2.jpg'
        },
        {
          car_id: 10,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_tundra_1.jpg'
        },
        {
          car_id: 10,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_tundra_2.jpg'
        },

      ]);
    });
};
