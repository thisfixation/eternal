<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
// SETUP
//To specify which character to track, add your character names in the format ["name", "name"] etc
const characterNames = ["JEREMIAH MERCER"];

//include any forums you do not want to track here
const irrelevantForums = ["announcements", "support center", "star hunter", "canon roster", "wanted ads", "character dossiers", "development", "plotting", "lounge", "advertising"];

//include any forums where completed or dead threads are stored here
const closedThreadForums = ["completed", "and", "dead", "threads", "here"];

//if you are having issues with flood control warnings or getting error messages in your autotracker, try upping this value by increments of 10,000, then step down by 1000 increments when things start working
const floodControlValue = 10000
//END OF SETUP

</script>
<script>$.getScript("https://files.jcink.net/uploads2/oonabashed/autotracker/OonasAutotracker.js")
</script>
