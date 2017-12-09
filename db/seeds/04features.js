exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('features').del()
    .then(function () {
      // Inserts seed entries
      return knex('features').insert([
        {
          car_id: 1,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 2,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 3,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 4,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 5,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 6,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 7,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 8,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 9,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 10,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 11,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 12,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 13,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 14,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 15,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 16,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 17,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 18,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 19,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        },
        {
          car_id: 20,
          feature_1: 'Electronic stability',
          feature_2: 'Wireless phone connectivity',
          feature_3: 'Split folding rear seat',
          feature_4: 'Remote keyless entry',
          feature_5: 'Trip computer',
          feature_6: 'Low tire pressure warning',
          feature_7: 'Rear window wiper',
          feature_8: 'Fully automatic headlights'
        }
      ]);
    });
};
