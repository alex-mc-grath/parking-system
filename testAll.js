import testMakeIndividual from './server/entities/individual/test.js'

try
{
    testMakeIndividual();
    console.log("* testMakeIndividual: OK");
}
catch (err)
{
    console.log("X testMakeIndividual: "+err.message);
}