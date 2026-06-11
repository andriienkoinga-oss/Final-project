const eventsStore = [
  {
    title: 'INFJ Personality Type - Coffee Shop Meet & Greet',
    description: 'Being an INFJ',
    date: "Sat, Mar 23 2024",
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ',
    type: 'offline',
    attendees: '99 attendees',
    category: 'Hobbies and Passions',
    distance: " 5km",
  },
  {
    title:
      'NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience',
    description: 'New York AI Users',
    date: "Sat, Mar 23 2024",
    image:
      'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
    type: 'offline',
    attendees: '43 attendees',
    category: 'Technology',
    distance: '25km',
  },
  {
    title: 'Book 40+ Appointments Per Month Using AI and Automation',
    description: 'New Jersey Business Network',
    date: "Sat, Mar 16 2024",
    image:
      'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    category: 'Technology',
    distance: '10km',
  },
  {
    title: 'Dump writing group weekly meetup',
    description: 'Dump writing group',
    date: "Wed, Mar 13 2024",
    image:
      'https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: '77 attendees',
    category: 'Business',
    distance: '100km',
  },
  {
    title: 'Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community',
    description: 'Over 40s, 50s, 60s Singles Chat, Meet & Dating Community',
    date: "Thu, Mar 14 2024",
    image:
      'https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: '140 attendees',
    category: 'Social Activities',
    distance: '74km',
  },
  {
    title: 'All Nations - Manhattan Missions Church Bible Study',
    description: 'Manhattan Bible Study Meetup Group',
    date: "Thu, Mar 14 2024",
    image:
      'https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'offline',
    category: 'Health and Wellbeing',
    distance: '15km',
  },
]


const logo = document.querySelector('#logo')
logo.addEventListener('click', () => {
    window.location.href = './index.html';
});


const eventsBox = document.querySelector('#eventsBox')

const categoryFilterType = document.querySelector('#categoryFilterType')
const categoryFilterDistance = document.querySelector('#categoryFilterDistance')
const categoryFilterCategory = document.querySelector('#categoryFilterCategory')
const categoryFilterDate = document.querySelector('#categoryFilterDate')

function renderEvents(events = eventsStore) {
  eventsBox.innerHTML = ''

  events.forEach((event) => {
    eventsBox.insertAdjacentHTML(
      'beforeend',
      `
      <div class="event_box">
        <img src="${event.image}" alt="">
        <div class="box_text">
          <h6>${event.date}</h6>
          <h5>${event.title}</h5>
          <p class="category">${event.category} (${event.distance})</p>
          ${event.attendees ? `<p class="attendees">${event.attendees}</p>` : ''}
        </div>
      </div>
      `
    )
  })
}

function filterEvents() {
  eventsBox.innerHTML = ''
  const selectedType = categoryFilterType.value
  const selectedDistance = categoryFilterDistance.value
  const selectedCategory = categoryFilterCategory.value
  const selectedDate = categoryFilterDate.value

  const filteredEvents = eventsStore.filter((event) => {
    return (
      (selectedType === '' || event.type === selectedType) &&
      (selectedDistance === '' || event.distance.trim() === selectedDistance) &&
      (selectedCategory === '' || event.category === selectedCategory) &&
      (selectedDate === '' || event.date === selectedDate)
    )
  })

  renderEvents(filteredEvents)
}

categoryFilterType.addEventListener('change', filterEvents)
categoryFilterDistance.addEventListener('change', filterEvents)
categoryFilterCategory.addEventListener('change', filterEvents)
categoryFilterDate.addEventListener('change', filterEvents)

renderEvents()
