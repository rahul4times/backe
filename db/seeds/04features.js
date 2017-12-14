exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('features').del()
    .then(function () {
      // Inserts seed entries
      return knex('features').insert([
        {
          car_id: 1,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 2,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 3,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 4,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 5,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 6,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 7,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 8,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 9,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 10,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 11,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 12,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 13,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 14,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 15,
          elect_stab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          trip_comp: 'Trip computer',
          tire_pressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        }
      ]);
    });
};
