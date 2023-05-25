cube(`orders`, {
  sql_table: `public.orders`,

  data_source: `default`,

  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    users: {
      sql: `${CUBE}.user_id = ${users}.id`,
      relationship: `many_to_one`,
    },

    products: {
      sql: `${CUBE}.product_id = ${products}.id`,
      relationship: `many_to_one`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },

    number: {
      sql: `number`,
      type: `sum`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true,
    },

    status: {
      sql: `status`,
      type: `string`,
    },

    created_at: {
      sql: `created_at`,
      type: `time`,
    },

    completed_at: {
      sql: `completed_at`,
      type: `time`,
    },
  },
});
