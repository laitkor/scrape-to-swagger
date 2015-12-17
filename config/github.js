var config = module.exports = {
  url: 'https://developer.github.com/v3/',
  urlRegex: /^https:\/\/developer.github.com\/v3/,
  protocols: ['https'],
  host: 'api.github.com',
  basePath: '/',
  title: 'GitHub API',
  description: 'The GitHub API',
  operations: {selector: '.content'},
  operation: {selector: 'h2 ~ pre:not(.highlight)'},
  path: {selector: 'h2 ~ pre:not(.highlight)', regex: /\w+ (\/\S*)/, sibling: true},
  method: {selector: 'h2 ~ pre:not(.highlight)', regex: /(\w+) .*/, sibling: true},
  parameters: {selector: 'table', sibling: true},
  parameter: {selector: 'tr'},
  parameterName: {selector: 'td:first-of-type', regex: /(\S+)/},
  parameterType: {selector: 'td:nth-of-type(2)'},
  parameterDescription: {selector: 'td:nth-of-type(3)'},
  requestBody: {selector: 'h3:nth-of-type(1) + h4 + pre + h4 + pre + h4 + pre', isExample: true},
  responseStatus: {selector: 'h3:nth-of-type(2) + h4 + pre', regex: /(\d+) .*/},
  responseDescription: {selector: 'h3:nth-of-type(2) + h4 + pre', regex: /\d+ (.*)/},
  responseSchema: {selector: 'h3:nth-of-type(2) + h4 + pre + h4 + pre + h4 + pre', isExample: true},

  extractPathParameters: function(path) {
    pieces = path.split('/');
    pieces = pieces.map(function(p) {
      if (p.indexOf(':') === 0) return '{' + p.substring(1) + '}';
      else return p;
    })
    return pieces.join('/');
  }
}
