exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('features').del()
    .then(function () {
      // Inserts seed entries
      return knex('features').insert([
        {
          car_id: 1,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 2,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 3,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 4,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 5,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 6,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 7,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 8,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 9,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 10,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 11,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 12,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 13,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 14,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        },
        {
          car_id: 15,
          electStab: 'Electronic stability',
          wireless: 'Wireless phone connectivity',
          seat: 'Split folding rear seat',
          keyless: 'Remote keyless entry',
          tripComp: 'Trip computer',
          tirePressure: 'Low tire pressure warning',
          wiper: 'Rear window wiper',
          headlight: 'Fully automatic headlights'
        }
      ]);
    });
};
