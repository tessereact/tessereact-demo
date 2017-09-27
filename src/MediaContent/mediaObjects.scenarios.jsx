import React from 'react'
import { context, scenario as scenarioFn } from 'tessereact'
import { Media } from 'react-bootstrap'

const scenario = (name, fn) => scenarioFn(name, fn, {css: true, screenshot: true})

context('Media content: Media objects', () => {
  scenario('Media object', () =>
    <div>
      <Media>
       <Media.Left>
          <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Media Heading</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left>
          <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Media Heading</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          <Media>
            <Media.Left>
              <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>Nested Media Heading</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </Media.Body>
          </Media>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <Media.Heading>Media Heading</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </Media.Body>
        <Media.Right>
          <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Right>
      </Media>
      <Media>
        <Media.Left>
          <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Media Heading</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </Media.Body>
         <Media.Right>
          <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Right>
      </Media>
    </div>
  )

  scenario('Media Alignment', () =>
    <div>
      <Media>
        <Media.Left align="top">
          <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Top aligned media</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

          <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left align="middle">
          <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Middle aligned media</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

          <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left align="bottom">
          <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>Bottom aligned media</Media.Heading>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

          <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </Media.Body>
      </Media>
    </div>
  )

  scenario('Media list', () =>
    <div>
      <Media.List>
        <Media.ListItem>
          <Media.Left>
            <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

              <Media>
                <Media.Left>
                  <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Nested media heading</Media.Heading>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading>Nested media heading</Media.Heading>
                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                    </Media.Body>
                  </Media>
                </Media.Body>
              </Media>

              <Media>
                <Media.Left>
                  <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Nested media heading</Media.Heading>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </Media.Body>
              </Media>
          </Media.Body>
        </Media.ListItem>
      </Media.List>
    </div>
  )
})
