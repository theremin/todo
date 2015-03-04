import DS from 'ember-data';

//var ApplicationAdapter = DS.FixtureAdapter.extend({});
var ApplicationAdapter = DS.RESTAdapter.extend({

    namespace: 'api'
});

export default ApplicationAdapter;
