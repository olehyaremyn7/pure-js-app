export function renderPost(post, option = {}) {
    const tag = post.type === 'news'
        ? '<li class="tag tag-blue tag-rounded">News</li>'
        : '<li class="tag tag-rounded">Post</li>'

    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const isPost = favorites.find(post => post.id === post.id)

    const btn = isPost
        ? `<button class="button-round button-small button-danger" data-id="${post.id}" data-title="${post.title}">Delete</button>`
        : `<button class="button-round button-small button-primary" data-id="${post.id}" data-title="${post.title}">Save</button>`

    return `
        <div class="panel">
          <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
            ${tag}
            </ul>
          </div>
          <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
          </div>
          <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
            ${option.withButton ? btn : ''}
          </div>
        </div>
    `
}
