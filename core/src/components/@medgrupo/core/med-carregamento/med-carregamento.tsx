import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'med-carregamento',
  styleUrl: 'med-carregamento.scss',
  scoped: true,
})
export class MedCarregamento {
  @Prop() message!: string;
  @Prop() color = '#808080';

  render() {
    return (
      <Host>
       <div class="loader">
        <div class="loader__circle">
          <svg width="40" class="loader__svg" height="40" xmlns="http://www.w3.org/2000/svg" >
             <g class="layer">
              <title>Camada 3 copy</title>
              <g id="svg_45">
                <rect class="rectangles" fill="none" height="7.00217" id="svg_24" stroke={this.color} stroke-width="9"
                  transform="matrix(-0.000285309, -0.144971, 0.133664, -0.000309445, -54.572, 100.094)" width="67.5164"
                  x="587.14754" y="515.14057" />
                <g id="svg_25" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_26" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.8228, 107.911)" width="67.5164"
                  x="464.96056" y="-653.27115" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_27" stroke={this.color} stroke-width="9"
                  transform="matrix(-0.000285309, -0.144971, 0.133664, -0.000309445, -50.9844, 103.966)" width="67.5164"
                  x="613.89129" y="515.10057" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_28" stroke={this.color} stroke-width="9"
                  transform="matrix(-0.000285309, -0.144971, 0.133664, -0.000309445, -47.4061, 107.838)" width="67.5164"
                  x="640.605" y="515.10057" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_29" stroke={this.color} stroke-width="9"
                  transform="matrix(-0.000285309, -0.144971, 0.133664, -0.000309445, -43.9627, 111.711)" width="67.5164"
                  x="666.81468" y="515.6046" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_30" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.8217, 107.746)" width="67.5164"
                  x="605.58554" y="-652.76714" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_31" stroke={this.color} stroke-width="9"
                  transform="matrix(-0.000285309, -0.144971, 0.133664, -0.000309445, -69.4775, 124.139)" width="67.5164"
                  x="614.14371" y="653.70933" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_32" stroke={this.color} stroke-width="9"
                  transform="matrix(-0.000285309, -0.144971, 0.133664, -0.000309445, -65.8992, 128.012)" width="67.5164"
                  x="640.85742" y="653.70933" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_33" stroke={this.color} stroke-width="9"
                  transform="matrix(-0.000285309, -0.144971, 0.133664, -0.000309445, -73.0897, 120.23)" width="67.5164"
                  x="587.17755" y="653.70943" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_34" stroke={this.color} stroke-width="9"
                  transform="matrix(-0.000285309, -0.144971, 0.133664, -0.000309445, -62.4222, 131.922)" width="67.5164"
                  x="667.31868" y="654.21346" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_35" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.7951, 107.91)" width="67.5164"
                  x="465.96861" y="-627.56553" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_36" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.7663, 107.91)" width="67.5164"
                  x="465.96861" y="-600.85182" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_37" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.7386, 107.911)" width="67.5164"
                  x="465.46458" y="-575.14617" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_38" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.738, 107.747)" width="67.5164"
                  x="605.58555" y="-575.14617" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_39" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.7657, 107.747)" width="67.5164"
                  x="605.08152" y="-600.85182" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_40" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.7945, 107.747)" width="67.5164"
                  x="605.58554" y="-627.56553" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_41" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.7945, 107.813)" width="8.02221"
                  x="578.38522" y="-627.32565" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_42" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.766, 107.813)" width="8.02221"
                  x="578.37702" y="-600.85181" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_43" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.7943, 107.845)" width="8.02221"
                  x="551.15927" y="-627.06149" />
                <rect class="rectangles" fill="none" height="7.00217" id="svg_44" stroke={this.color} stroke-width="9"
                  transform="matrix(0.13366, 0.00116907, -0.00107788, 0.144967, -56.7661, 107.844)" width="8.02221"
                  x="552.16734" y="-600.85181" />
              </g>
            </g>
            <g class="layer" display="inline">
              <ellipse class="circle" cx="20.00937" cy="19.76323" fill={this.color} fill-opacity="0" id="svg_100"
                rx="18.58864" ry="18.58864" stroke={this.color} stroke-width="2" />
            </g>
          </svg>
        </div>
        <med-type>{this.message}</med-type>
      </div>

      </Host>
    );
  }

}
