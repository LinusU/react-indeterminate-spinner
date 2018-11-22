var React = require('react')

function IndeterminateSpinner (props) {
  var children = []
  var size = ((props && props.size) || '100px')

  for (var idx = 0; idx < 12; idx++) {
    var rectProps = {
      key: idx,
      x: '46.5',
      y: '40',
      width: '7',
      height: '20',
      rx: '5',
      ry: '5',
      fill: '#333',
      transform: 'rotate(' + (idx * 30).toFixed(0) + ' 50 50) translate(0 -30)'
    }

    var animateProps = {
      key: '' + idx,
      attributeName: 'opacity',
      from: '1',
      to: '0',
      dur: '1s',
      begin: (-1 + (idx / 12)).toFixed(4) + 's',
      repeatCount: 'indefinite'
    }

    children.push(React.createElement('rect', rectProps, [
      React.createElement('animate', animateProps)
    ]))
  }

  return React.createElement('svg', { width: size, height: size, viewBox: '0 0 100 100' }, children)
}

module.exports = IndeterminateSpinner
