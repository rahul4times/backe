
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
          link: 'https://s3.amazonaws.com/cartool/white_honda_odyssey_1.jpg'
        },
        {
          car_id: 2,
          link: 'https://s3.amazonaws.com/cartool/white_honda_odyssey_2.jpg'
        },
        {
          car_id: 3,
          link: 'https://s3.amazonaws.com/cartool/gray_honda_crv_1.jpg'
        },
        {
          car_id: 3,
          link: 'https://s3.amazonaws.com/cartool/gray_honda_crv_2.jpg'
        },
        {
          car_id: 4,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_4runner_1.jpg'
        },
        {
          car_id: 4,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_4runner_2.jpg'
        },
        {
          car_id: 5,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_avalon_1.jpg'
        },
        {
          car_id: 5,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_avalon_2.jpg'
        },
        {
          car_id: 6,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_tocoma_1.jpg'
        },
        {
          car_id: 6,
          link: 'https://s3.amazonaws.com/cartool/white_toyota_tocoma_2.jpg'
        },
        {
          car_id: 7,
          link: 'https://s3.amazonaws.com/cartool/white_mercedes_amg43_1.jpg'
        },
        {
          car_id: 7,
          link: 'https://s3.amazonaws.com/cartool/white_mercedes_amg43_2.png'
        },
        {
          car_id: 8,
          link: 'https://s3.amazonaws.com/cartool/white_merecedes_c300_coupe_1.jpg'
        },
        {
          car_id: 8,
          link: 'https://s3.amazonaws.com/cartool/white_merecedes_c300_coupe_2.png'
        },
        {
          car_id: 9,
          link: 'https://s3.amazonaws.com/cartool/gray_audi_a3_20t_1.jpg'
        },
        {
          car_id: 9,
          link: 'https://s3.amazonaws.com/cartool/gray_audi_a3_20t_2.jpg'
        },
        {
          car_id: 10,
          link: 'https://s3.amazonaws.com/cartool/gray_audi_q3_2.ot_suv_1.jpg'
        },
        {
          car_id: 10,
          link: 'https://s3.amazonaws.com/cartool/gray_audi_q3_2.ot_suv_2.png'
        },
        {
          car_id: 11,
          link: 'https://s3.amazonaws.com/cartool/gray_audi_a5_2ot_coupe_1.jpg'
        },
        {
          car_id: 11,
          link: 'https://s3.amazonaws.com/cartool/gray_audi_a5_2ot_coupe_2.jpg'
        },
        {
          car_id: 12,
          link: 'https://s3.amazonaws.com/cartool/white_maserati_granturismo_coupe_1.jpg'
        },
        {
          car_id: 12,
          link: 'https://s3.amazonaws.com/cartool/white_maserati_granturismo_coupe_2.jpg'
        },
        {
          car_id: 13,
          link: 'https://s3.amazonaws.com/cartool/gray_maserati_levante_granlusso_suv_1.jpg'
        },
        {
          car_id: 13,
          link: 'https://s3.amazonaws.com/cartool/gray_maserati_levante_granlusso_suv_2.jpg'
        },
        {
          car_id: 14,
          link: 'https://s3.amazonaws.com/cartool/white_lamborghini_1.jpg'
        },
        {
          car_id: 14,
          link: 'https://s3.amazonaws.com/cartool/white_lamborghini_2.jpg'
        },
        {
          car_id: 15,
          link: 'https://s3.amazonaws.com/cartool/white_subaru_outback_1.png'
        },
        {
          car_id: 15,
          link: 'https://s3.amazonaws.com/cartool/white_subaru_outback_2.jpg'
        }
      ]);
    });
};
