import React, { useState, useEffect } from 'react';
import Checkbox from '../../kit/Checkbox/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './Content.css';

const Content = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [values, setValues] = useState([minPrice, maxPrice]);

  const handleRangeChange = (newValues) => {
    setValues(newValues);
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
  };

  const handleMinPriceChange = (e) => {
    const newMin = Number(e.target.value.replace(/,/g, ''));
    if (!isNaN(newMin) && newMin >= 0 && newMin <= maxPrice) {
      setMinPrice(newMin);
      setValues([newMin, maxPrice]);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newMax = Number(e.target.value.replace(/,/g, ''));
    if (!isNaN(newMax) && newMax >= minPrice) {
      setMaxPrice(newMax);
      setValues([minPrice, newMax]);
    }
  };

  const increaseMinPrice = () => {
    if (minPrice < maxPrice) {
      const newMin = minPrice + 1;
      setMinPrice(newMin);
      setValues([newMin, maxPrice]);
    }
  };

  const decreaseMinPrice = () => {
    if (minPrice > 0) {
      const newMin = minPrice - 1;
      setMinPrice(newMin);
      setValues([newMin, maxPrice]);
    }
  };

  const increaseMaxPrice = () => {
    const newMax = maxPrice + 1;
    setMaxPrice(newMax);
    setValues([minPrice, newMax]);
  };

  const decreaseMaxPrice = () => {
    if (maxPrice > minPrice) {
      const newMax = maxPrice - 1;
      setMaxPrice(newMax);
      setValues([minPrice, newMax]);
    }
  };

  useEffect(() => {
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <div className="container">
      <main className="main">
        <div className="filter-products">
          {/* checkboxes component */}
          <div className="checkboxes">
            <form action="#" className="filter__form">
              <h2 className="filter__form">categories</h2>
              <Checkbox label="Laptops" count={120} id="laptops" />
              <Checkbox label="Smartphones" count={740} id="smartphones" />
              <Checkbox label="Cameras" count={1450} id="cameras" />
              <Checkbox label="Accessories" count={578} id="accessories" />
            </form>
          </div>

          {/* price component */}
          <div className="price">
            <form action="#" className="filter__form">
              <h2 className="filter__form">price</h2>
              <RangeSlider
                value={values}
                min={0}
                max={5000000}
                onInput={handleRangeChange}
              />
              <div className="number-input__wrapper">
                {/* number input component */}
                <div className="number-input">
                  <div className="number-input__span">
                    <input
                      type="text"
                      value={minPrice.toLocaleString()}
                      onChange={handleMinPriceChange}
                    />
                  </div>
                  <div className="number-input__buttons">
                    <span onClick={increaseMinPrice}>+</span>
                    <span onClick={decreaseMinPrice}>-</span>
                  </div>
                </div>
                <div className="number-input">
                  <div className="number-input__span">
                    <input
                      type="text"
                      value={maxPrice.toLocaleString()}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                  <div className="number-input__buttons">
                    <span onClick={increaseMaxPrice}>+</span>
                    <span onClick={decreaseMaxPrice}>-</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* checkboxes component */}
          <div className="checkboxes">
            <form action="#" className="filter__form">
              <h2 className="filter__form">brand</h2>
              <Checkbox label="SAMSUNG" count={578} id="sumsung" />
              <Checkbox label="LG" count={125} id="lg" />
              <Checkbox label="SONY" count={755} id="sony" />
            </form>
          </div>
        </div>

        <div className="products">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptates eum incidunt tempora adipisci non at porro! Perspiciatis esse libero illo obcaecati deleniti inventore vitae deserunt, sunt molestiae sit soluta?
          Itaque, aliquam facilis non harum tempore sed? Minus veniam dignissimos dicta vitae totam sequi odio illo fugiat voluptatibus eum ex labore, voluptates officiis quasi non magni adipisci nostrum. Repellat, beatae?
          Incidunt possimus nemo nam doloribus ea voluptate, laboriosam quod pariatur harum corrupti? Corporis, ullam in repudiandae incidunt quo molestias aliquam tenetur animi vero! Ex dolores autem delectus? Beatae, dolore iusto!
          Fugit, atque quia a architecto vero expedita consequuntur debitis dolor ipsa, voluptas obcaecati dolorem pariatur molestias placeat porro deleniti facilis consectetur nam quaerat ipsam iure sequi voluptatum consequatur! Nesciunt, voluptatibus!
          Eius reprehenderit quae vel animi fugit pariatur ad voluptate voluptates, excepturi, officiis error suscipit? Obcaecati aspernatur soluta temporibus beatae vero rem, nihil ullam iste omnis error! Cupiditate laborum odio sapiente.
          Quasi quam excepturi nostrum aspernatur eos aliquid sed expedita voluptates tempora perferendis corporis, deleniti ad repudiandae in quos accusamus harum maiores facilis, ut, non eligendi vitae neque. Praesentium, repellendus enim?
          Nobis, suscipit quaerat quibusdam reprehenderit dolor totam perspiciatis laboriosam. Ea odio et quis sit cumque, quo distinctio, dignissimos voluptates natus placeat possimus illo atque autem? Distinctio ut ipsum debitis qui!
          Nostrum suscipit porro asperiores molestias dicta fuga, doloribus, veniam id eaque nobis velit? Debitis officiis maxime animi hic iure! Aspernatur quae aperiam sint autem nam fugiat nostrum beatae, quibusdam distinctio.
          Omnis quaerat, corrupti magni tempore repellat itaque fugiat culpa possimus, numquam quod alias minus beatae? Placeat quo quasi repellat, sapiente temporibus explicabo quia officiis ipsum. Ipsum consequuntur perferendis doloribus dicta.
          Magni commodi ratione omnis dolore eum incidunt voluptas, nulla exercitationem amet necessitatibus aperiam quasi doloribus, facilis quo, ea ex assumenda dicta tempora quisquam esse. Unde vel blanditiis officia ipsam quibusdam.
          Delectus impedit minus, voluptatem incidunt commodi odit vel suscipit quia! Quos architecto est dolores voluptatem maxime vel. Quam beatae quo ea laboriosam architecto, quis repellendus nihil dolore quas, cum perferendis!
          Explicabo, illo doloribus laudantium distinctio libero sapiente ullam qui consequuntur natus, alias quis ratione rerum, mollitia minima. Officiis quisquam praesentium accusamus eum. Consectetur mollitia labore aliquid laudantium reiciendis nihil facere?
          Ipsum, quae? Consequatur alias laboriosam non deserunt quos, aperiam perferendis sequi nihil architecto pariatur omnis rerum eos laudantium illo tenetur possimus et cupiditate quod velit! Nisi voluptatibus accusamus impedit nesciunt.
          Accusamus culpa dolor quisquam in voluptatum, quidem officia atque temporibus ipsam fugiat similique velit harum tempora doloribus nulla excepturi repellendus assumenda non quos consequatur facilis illo fuga ullam necessitatibus! Ducimus.
          Voluptates earum ab soluta nihil dolores, ut quasi dignissimos sit fugiat obcaecati maiores optio, dolor ex nam, sapiente perferendis quo tempore impedit doloribus labore laudantium ullam! Labore, est dolores? Quibusdam?
          Odio pariatur quas illum unde quod officia, nesciunt in error ratione a! Placeat quo laborum tenetur explicabo mollitia error tempora ut autem sunt perspiciatis dolor, accusamus veniam quis aperiam ducimus.
          Numquam ipsum perspiciatis repellendus. Mollitia, impedit? Reprehenderit, ab necessitatibus quod hic obcaecati fugiat consectetur corporis quia eius! Eligendi vel explicabo laboriosam mollitia veritatis laborum tempore. Quam dolorem enim minima veritatis.
          At voluptatum quo dolorum exercitationem, dignissimos praesentium officiis deserunt ad incidunt asperiores? Totam reprehenderit, officiis harum quibusdam laborum sunt suscipit quo repellat exercitationem voluptatem vitae mollitia cupiditate id hic placeat?
          Earum labore tempore, magni ab sint repellendus debitis, minima quasi omnis odit officia quidem ex veniam. Sequi necessitatibus optio perferendis in, debitis consequatur nesciunt error corrupti dolor fugit, tempore dignissimos!
          Est distinctio eius excepturi nisi, quisquam earum, neque, itaque quia placeat dolorem id quasi! Sit blanditiis ipsa ex soluta architecto quod atque! Quo possimus expedita porro non beatae odio unde!
          Doloribus quos aliquam ea repellendus, atque, quam, consequuntur cupiditate impedit inventore itaque repudiandae exercitationem quas totam in et! Animi laborum blanditiis eius delectus, harum cupiditate alias! Atque adipisci doloribus optio.
          Ducimus quod voluptatibus suscipit laboriosam recusandae blanditiis voluptate impedit mollitia nam? Dignissimos sapiente nobis, dolor, eligendi sit ipsa ipsum temporibus corporis quaerat tempora, harum exercitationem cum alias facere cumque totam.
          Quos nihil repellendus expedita perferendis debitis. Voluptate quae doloremque facere id accusamus, suscipit maiores nihil sequi eligendi adipisci atque culpa. Dolorem voluptatum doloribus assumenda similique harum, adipisci eos fugiat quod!
          Soluta corporis pariatur officia beatae neque voluptas impedit veniam, error assumenda aliquam eligendi architecto adipisci odio eaque itaque saepe dolor eos. Voluptates aliquid voluptate libero fuga assumenda unde deserunt quod?
          Error ex, deserunt in officiis fuga earum sed quaerat asperiores velit ipsa odit quas sunt delectus consequatur? Beatae eligendi autem voluptatum aliquam quibusdam repudiandae, excepturi amet consequatur aperiam, tenetur dicta?
          Minus ab cupiditate qui nulla consectetur molestiae eius dolore officiis, distinctio nisi, reprehenderit unde accusantium facilis veniam fugiat recusandae porro eum dignissimos? Quae minima excepturi quas vitae aspernatur explicabo at.
          Hic exercitationem enim vero numquam consequatur sunt facilis culpa reprehenderit fuga tenetur accusamus voluptas, error, aliquid nisi officiis deserunt, quae blanditiis praesentium. Totam quis deserunt quos nemo veniam sunt odio.
          Molestiae vitae architecto blanditiis nisi placeat quod voluptatibus ipsum iusto nesciunt a, possimus aliquam tenetur dolore. Eaque voluptas est quo a, obcaecati ad fugit ea? Suscipit culpa blanditiis reiciendis adipisci.
          Officia, repellendus placeat! Nostrum molestias rerum quaerat odio eum, qui blanditiis deserunt fugiat cupiditate molestiae officiis accusantium incidunt consectetur dolorem maxime, error delectus, ratione assumenda iusto impedit ipsa consequatur eius!
          Consequatur maiores nisi modi architecto fugiat repellendus voluptate quibusdam velit repellat quam dolore voluptatem, quia laboriosam reiciendis sed numquam magni atque sunt id sapiente quas dolores hic blanditiis. Quod, magnam!
        </div>
      </main>
    </div>
  );
};

export default Content;
