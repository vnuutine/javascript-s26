// --------------------------------------------- //
// EXERCISE DATA                                 //
// path: file inside the javascript-s26 repo     //
// path null = task not done, shown without links //
// comment: optional note shown under the task   //
// --------------------------------------------- //

const REPO_OWNER = "vnuutine";
const REPO_NAME = "javascript-s26";
const DEMO_BASE = `https://${REPO_OWNER}.github.io/${REPO_NAME}/`;
const SOURCE_BASE = `https://github.com/${REPO_OWNER}/${REPO_NAME}/blob/main/`;

const exerciseSets = [
  {
    set: 1,
    tasks: [
      { task: 1, path: "harjoitukset-1/h1t1.html", points: 2, max: 2 },
      { task: 2, path: "harjoitukset-1/h1t2.html", points: 2, max: 2 },
      { task: 3, path: "harjoitukset-1/h1t3.html", points: 2, max: 2 },
      { task: 4, path: "harjoitukset-1/h1t4.html", points: 2, max: 2 },
      { task: 5, path: "harjoitukset-1/h1t5.html", points: 2, max: 2 },
      { task: 6, path: "harjoitukset-1/h1t6.html", points: 2, max: 2 },
      { task: 7, path: "harjoitukset-1/h1t7.html", points: 3, max: 3 },
      { task: 8, path: "harjoitukset-1/h1t8.html", points: 3, max: 3 },
      { task: 9, path: "harjoitukset-1/h1t9.html", points: 3, max: 3 },
      { task: 10, path: "harjoitukset-1/h1t10.html", points: 3, max: 3 },
    ],
  },
  {
    set: 2,
    tasks: [
      { task: 1, path: "harjoitukset-2/tehtävä-1/h2t1.html", points: 3, max: 3 },
      { task: 2, path: "harjoitukset-2/tehtävä-2/h2t2.html", points: 3, max: 3 },
      { task: 3, path: "harjoitukset-2/tehtävä-3/h2t3.html", points: 4, max: 4 },
      { task: 4, path: "harjoitukset-2/tehtävä-4/h2t4.html", points: 4, max: 4 },
      { task: 5, path: "harjoitukset-2/h2t5.html", points: 3, max: 3 },
      { task: 6, path: "harjoitukset-2/h2t6.html", points: 4, max: 4 },
      { task: 7, path: "harjoitukset-2/h2t7.html", points: 5, max: 5 },
      { task: 8, path: "harjoitukset-2/tehtävä-8/h2t8.html", points: 6, max: 6 },
    ],
  },
  {
    set: 3,
    tasks: [
      { task: 1, path: "harjoitukset-3/h3t1.html", points: 2, max: 2 },
      { task: 2, path: "harjoitukset-3/h3t2.html", points: 2, max: 2 },
      { task: 3, path: "harjoitukset-3/h3t3.html", points: 2, max: 2 },
      { task: 4, path: "harjoitukset-3/h3t4.html", points: 3, max: 3 },
      { task: 5, path: "harjoitukset-3/h3t5.html", points: 4, max: 4 },
      { task: 6, path: "harjoitukset-3/h3t6.html", points: 4, max: 4 },
      { task: 7, path: "harjoitukset-3/h3t7.html", points: 4, max: 4 },
      { task: 8, path: "harjoitukset-3/tehtävä8/h3t8.html", points: 6, max: 6 },
      { task: 9, path: "harjoitukset-3/tehtävä9/h3t9.html", points: 10, max: 10 },
    ],
  },
  {
    set: 4,
    tasks: [
      { task: 1, path: "harjoitukset-4/teht1/h4t1.html", points: 2, max: 2 },
      { task: 2, path: "harjoitukset-4/h4t2.html", points: 2, max: 2 },
      { task: 3, path: "harjoitukset-4/teht3/h4t3.html", points: 4, max: 4 },
      { task: 4, path: "harjoitukset-4/teht4/h4t4.html", points: 6, max: 6 },
      { task: 5, path: "harjoitukset-4/teht5/h4t5.html", points: 6, max: 6 },
      { task: 6, path: null, points: 0, max: 4 },
      { task: 7, path: null, points: 0, max: 6 },
    ],
  },
  {
    set: 5,
    tasks: [
      { task: 1, path: "harjoitukset-5/teht1/h5t1.html", points: 6, max: 6 },
      { task: 2, path: "harjoitukset-5/teht2/h5t2.html", points: 2, max: 2 },
      { task: 3, path: "harjoitukset-5/teht3/h5t3.html", points: 2, max: 2 },
      { task: 4, path: "harjoitukset-5/teht4/h5t4.html", points: 6, max: 6 },
      { task: 5, path: null, points: 0, max: 10 },
    ],
  },
  {
    set: 6,
    tasks: [
      { task: 1, path: "harjoitukset-6/teht1/h6t1.html", points: 3, max: 3 },
      { task: 2, path: "harjoitukset-6/teht2/h6t2.html", points: 6, max: 6 },
      { task: 3, path: "harjoitukset-6/teht3/h6t3.html", points: 10, max: 10 },
    ],
  },
];

// --------- //
// RENDERING //
// --------- //

// Sum one field (points or max) over a list of tasks
function sumTasks(tasks, field) {
  return tasks.reduce((total, task) => total + task[field], 0);
}

// Pill link with a feather icon, same look as the project links on the main page
function createLink(href, icon, text) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener";
  link.className = "project-link";

  const iconElement = document.createElement("i");
  iconElement.dataset.feather = icon;

  link.append(iconElement, ` ${text}`);
  return link;
}

function createTaskItem(task) {
  const item = document.createElement("li");
  item.className = "exercise-task";

  const info = document.createElement("div");
  info.className = "exercise-task-info";

  const name = document.createElement("span");
  name.className = "exercise-task-name";
  name.textContent = `Tehtävä ${task.task}: ${task.points}/${task.max}p`;
  info.append(name);

  if (task.comment) {
    const comment = document.createElement("span");
    comment.className = "exercise-comment";
    comment.textContent = task.comment;
    info.append(comment);
  }

  item.append(info);

  // Tasks that are not done have no files to link to
  if (task.path) {
    const links = document.createElement("div");
    links.className = "exercise-links";
    links.append(
      createLink(DEMO_BASE + encodeURI(task.path), "eye", "Demo"),
      createLink(SOURCE_BASE + encodeURI(task.path), "github", "Lähdekoodi")
    );
    item.append(links);
  } else {
    item.classList.add("exercise-task-missing");
  }

  return item;
}

function createSetCard(exerciseSet) {
  const card = document.createElement("article");
  card.className = "exercise-card";
  card.id = `exercises-${exerciseSet.set}`;

  const title = document.createElement("h3");
  title.className = "exercise-title";
  const points = sumTasks(exerciseSet.tasks, "points");
  const max = sumTasks(exerciseSet.tasks, "max");
  title.textContent = `Harjoitukset ${exerciseSet.set} (${points}/${max}p)`;

  const list = document.createElement("ul");
  list.className = "exercise-list";
  exerciseSet.tasks.forEach((task) => list.append(createTaskItem(task)));

  card.append(title, list);
  return card;
}

function createSummaryItem(label, value) {
  const item = document.createElement("li");

  const labelElement = document.createElement("span");
  labelElement.textContent = label;

  const valueElement = document.createElement("strong");
  valueElement.textContent = value;

  item.append(labelElement, valueElement);
  return item;
}

function renderExercises() {
  const allTasks = exerciseSets.flatMap((exerciseSet) => exerciseSet.tasks);
  const points = sumTasks(allTasks, "points");
  const max = sumTasks(allTasks, "max");
  const percent = ((points / max) * 100).toFixed(1);

  document.getElementById("points-summary").append(
    createSummaryItem("Ehdotetut pisteet: ", points),
    createSummaryItem("Saatavilla olleet pisteet: ", max),
    createSummaryItem("Pisteet yhteensä: ", `${points}/${max} = ${percent} %`)
  );

  const setsContainer = document.getElementById("exercise-sets");
  exerciseSets.forEach((exerciseSet) => setsContainer.append(createSetCard(exerciseSet)));
}

renderExercises();
feather.replace();