cube(`users`, {
  sql_table: `public.users`,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    first_name: {
      sql: `first_name`,
      type: `string`
    },
    
    last_name: {
      sql: `last_name`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    }
  }
});
