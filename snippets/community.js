// --- #1 ---
try {
    buildSomethingCool();
} catch (e) {
    blameTheWifi();
    tryAgain();
}

// --- #2 ---
DELETE FROM comfort_zone;
INSERT INTO growth (creativity, grit, community);
COMMIT;
-- no rollback

// --- #3 ---
const community = developers.filter(
    dev => dev.shares && dev.helps && dev.shows_up
);

// --- #4 ---
function demo(project) {
    if (presenter.isNervous()) {
        crowd.cheer();
    }
    return standing_ovation;
}

// --- #5 --- by Isaac Vicentini
for (const dev of team) {
  dev.say("just a small change");
  sprint.scope++;
}

// --- #6 --- by Isaac Vicentini
do {
  imagine();
  build();
  improve();
} while (possibility.exists());

// --- #7 --- by Kristen Dettman
var everyone = new GlideRecord('sys_user');
everyone.addQuery('role', 'IN', 'developer,admin,architect,analyst');
everyone.addQuery('active', true);
everyone.query();
while (everyone.next()) {
    community.add(everyone);  // different roles, one community
}

// --- #8 ---
if (current.update()) {
    return (╯°□°)╯︵ ┻━┻;
}
// Stop trying to make current.update() happen.

// --- #9 --- by Astrid
let rec = new GlideRecord('sys_audit');
rec.query(); // I like to live dangerously

// --- #10 --- by eric
var grSysUser = new GlideRecord('sys_user');
grSysUser.addEncodedQuery("user_name=abel.tuter");
grSysUser.orderBy('name');
grSysUser.setLimit(20);
grSysUser.query();

// --- #11 --- by eric
if (gr.next()) {
    gs.log("weeee");
}
// WHY ISN'T THIS WORKING?!
// (forgot to .query())

// --- #12 --- by jarodm
if (NowUniversity.courseState == 'completed') {
    excitement.goBoom();
    Regrets.goPoof();
}

// --- #13 --- by Claude
var gr = new GlideRecord('sys_update_set');
gr.addQuery('state', 'in progress');
gr.query();
// 47 update sets. all "in progress". all from 2019.
// no one knows which one is safe to close.

// --- #14 --- by Claude
// works on my PDI
function migrate(code) {
    var local = code.test();   // pass
    var dev = code.promote();  // pass
    var prod = code.deploy();  // "record not found"
    return gs.addErrorMessage("works on my PDI");
}

// --- #15 --- by Claude
var script = new GlideRecord('sys_script');
script.addQuery('name', 'CONTAINS', 'Copy of Copy of');
script.query();
// 87 records found
// author: admin
// last updated: 3 years ago
// description: "testing - DELETE LATER"

// --- #16 --- by Claude
gs.log(gr.getValue('state'));       // null
gs.log(gr.state);                   // null
gs.log(gr.state.toString());        // null
gs.log(gr.state + "");              // null
gs.log("please");                   // null
