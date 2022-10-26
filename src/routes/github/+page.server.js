const fetchLanguages = async (url) => {
  const fromGit = await fetch(
    url,
    {
      method: 'GET',
      headers: {
        'authorization': 'token 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',
        'content-type': 'application/json; charset=utf-8',
        'access-control-allow-origin': '*',
      },
    },
  )
  const result = await fromGit.json()
  return result
}

export const load = async ({ fetch }) => {
  const fromGit = await fetch(
    'https://api.github.com/users/MohamadOjail/repos',
    {
      method: 'GET',
      headers: {
        'authorization': 'token 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',
        'content-type': 'application/json; charset=utf-8',
        'access-control-allow-origin': '*',
      },
    },
  )

  const repos = [];
  const result = await fromGit.json()
  for (let i = 0; i < result.length; i++) {
    const languages = []
    const repo = result[i];
    const langs = await fetchLanguages(repo.languages_url)

    for (var key in langs) {
      languages.push({
        lang: key,
        value: langs[key]
      })
    }
    repos.push({
      name: repo.name,
      url: repo.html_url,
      desc: repo.description,
      languages,
      topics: repo.topics
    })
  }

  return { repos }
}
