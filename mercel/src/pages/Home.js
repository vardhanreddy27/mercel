import React from "react";
import Search from "../components/Search";
import { HiOutlineHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
function Home() {
  const [isHome, setIsHome] = useState(true);
  const [isShops, setIsShops] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const clickHome = () => {
    setIsHome(true);
    setIsProfile(false);
    setIsShops(false);
    setIsCart(false);
  };
  const clickProfile = () => {
    setIsHome(false);
    setIsProfile(true);
    setIsShops(false);
    setIsCart(false);
  };
  const clickCart = () => {
    setIsHome(false);
    setIsProfile(false);
    setIsShops(false);
    setIsCart(true);
  };
  const clickShops = () => {
    setIsHome(false);
    setIsProfile(false);
    setIsShops(true);
    setIsCart(false);
  };
  return (
    <>
      <Search />
      How do I use this thing? Just start adding fields above! Click, go
      keyboard-only, it's up to you. Once you add at least one field, we'll
      automatically show you a preview of what your random data will look like.
      When you're finished with your dataset, go ahead and download it, and use
      it wherever you need it! What are we aiming to do here? With Cobbl.io, our
      goal is to make it as simple as possible to bring your projects to life
      with realistic (but fake!) data. Maybe you have a project that, yeah, it
      looks fine, but it's missing that sense of realism. Sure, you could
      manually generate a bunch of random data to fill into your design or app,
      but ugh you've done that before and you just don't have the time. Maybe
      real data is not accessible, or you can't pull it in real-time, or you're
      just not allowed to use live customer information. Whatever the reason,
      that's where Cobbl.io comes in. We're here to solve that
      I-just-need-to-show-what-my-work-realistically-looks-like data problem.
      Who is this for? Maybe you're a software engineer that needs to test the
      new UI with some notional data, or you're a UX designer that needs to see
      what your mock looks like with some sample data, or you're a sales
      engineer that needs to show a prospect what the product looks like with
      "real" data, or you're a data scientist that needs a bunch of random data
      to play with, or you're a product manager that needs some realistic data
      to express your new idea. We've all been there! There's no time to spare
      to generate that data, you just want to focus on the core work. At
      Cobbl.io, we agree with you! Focus on that core work, and let us take care
      of plugging in some prototypical data for you. Why Cobbl.io? There are
      other random data generators out there - go ahead, Google them, we'll
      still be here! The thing is, we just didn't fall in love with any of the
      solutions we could find. And you know what? We want our users to fall in
      love with our product. We want them to enjoy using our product. We want
      them to run to their friends and colleagues to tell them about this
      awesome super useful tool they discovered. (Is that so much to ask?!) In
      other words, we think user experience is just as important as utility.
      After all, if the product is too hard or just not enjoyable to use, people
      won't give it a second glance. It's as simple as that. Where can I sign
      up? We're glad you asked! Of course, feel free to check out the tool
      without signing up. If you're interested in receiving product update
      emails detailing our progress, though, feel free to give us your email via
      the feedback submission form, and we'd love to keep you up-to-date! When
      will [my super important feature] be available? Obviously there are no
      guarantees in product development, but tell us what you're looking for
      here, and we'll see what we can do! After all, we can only know what you
      want if you tell us. (We're not mind readers over here!) And, if you
      provide your email in that feedback form, we can let you know if/when we
      eventually have [insert amazing new feature here]. Of course, we promise
      we won't sell your email, but don't be surprised if we reach out for
      further thoughts! Thanks for checking us out! -The Cobbl.io TeamHow do I
      use this thing? Just start adding fields above! Click, go keyboard-only,
      it's up to you. Once you add at least one field, we'll automatically show
      you a preview of what your random data will look like. When you're
      finished with your dataset, go ahead and download it, and use it wherever
      you need it! What are we aiming to do here? With Cobbl.io, our goal is to
      make it as simple as possible to bring your projects to life with
      realistic (but fake!) data. Maybe you have a project that, yeah, it looks
      fine, but it's missing that sense of realism. Sure, you could manually
      generate a bunch of random data to fill into your design or app, but ugh
      you've done that before and you just don't have the time. Maybe real data
      is not accessible, or you can't pull it in real-time, or you're just not
      allowed to use live customer information. Whatever the reason, that's
      where Cobbl.io comes in. We're here to solve that
      I-just-need-to-show-what-my-work-realistically-looks-like data problem.
      Who is this for? Maybe you're a software engineer that needs to test the
      new UI with some notional data, or you're a UX designer that needs to see
      what your mock looks like with some sample data, or you're a sales
      engineer that needs to show a prospect what the product looks like with
      "real" data, or you're a data scientist that needs a bunch of random data
      to play with, or you're a product manager that needs some realistic data
      to express your new idea. We've all been there! There's no time to spare
      to generate that data, you just want to focus on the core work. At
      Cobbl.io, we agree with you! Focus on that core work, and let us take care
      of plugging in some prototypical data for you. Why Cobbl.io? There are
      other random data generators out there - go ahead, Google them, we'll
      still be here! The thing is, we just didn't fall in love with any of the
      solutions we could find. And you know what? We want our users to fall in
      love with our product. We want them to enjoy using our product. We want
      them to run to their friends and colleagues to tell them about this
      awesome super useful tool they discovered. (Is that so much to ask?!) In
      other words, we think user experience is just as important as utility.
      After all, if the product is too hard or just not enjoyable to use, people
      won't give it a second glance. It's as simple as that. Where can I sign
      up? We're glad you asked! Of course, feel free to check out the tool
      without signing up. If you're interested in receiving product update
      emails detailing our progress, though, feel free to give us your email via
      the feedback submission form, and we'd love to keep you up-to-date! When
      will [my super important feature] be available? Obviously there are no
      guarantees in product development, but tell us what you're looking for
      here, and we'll see what we can do! After all, we can only know what you
      want if you tell us. (We're not mind readers over here!) And, if you
      provide your email in that feedback form, we can let you know if/when we
      eventually have [insert amazing new feature here]. Of course, we promise
      we won't sell your email, but don't be surprised if we reach out for
      further thoughts! Thanks for checking us out! -The Cobbl.io TeamHow do I
      use this thing? Just start adding fields above! Click, go keyboard-only,
      it's up to you. Once you add at least one field, we'll automatically show
      you a preview of what your random data will look like. When you're
      finished with your dataset, go ahead and download it, and use it wherever
      you need it! What are we aiming to do here? With Cobbl.io, our goal is to
      make it as simple as possible to bring your projects to life with
      realistic (but fake!) data. Maybe you have a project that, yeah, it looks
      fine, but it's missing that sense of realism. Sure, you could manually
      generate a bunch of random data to fill into your design or app, but ugh
      you've done that before and you just don't have the time. Maybe real data
      is not accessible, or you can't pull it in real-time, or you're just not
      allowed to use live customer information. Whatever the reason, that's
      where Cobbl.io comes in. We're here to solve that
      I-just-need-to-show-what-my-work-realistically-looks-like data problem.
      Who is this for? Maybe you're a software engineer that needs to test the
      new UI with some notional data, or you're a UX designer that needs to see
      what your mock looks like with some sample data, or you're a sales
      engineer that needs to show a prospect what the product looks like with
      "real" data, or you're a data scientist that needs a bunch of random data
      to play with, or you're a product manager that needs some realistic data
      to express your new idea. We've all been there! There's no time to spare
      to generate that data, you just want to focus on the core work. At
      Cobbl.io, we agree with you! Focus on that core work, and let us take care
      of plugging in some prototypical data for you. Why Cobbl.io? There are
      other random data generators out there - go ahead, Google them, we'll
      still be here! The thing is, we just didn't fall in love with any of the
      solutions we could find. And you know what? We want our users to fall in
      love with our product. We want them to enjoy using our product. We want
      them to run to their friends and colleagues to tell them about this
      awesome super useful tool they discovered. (Is that so much to ask?!) In
      other words, we think user experience is just as important as utility.
      After all, if the product is too hard or just not enjoyable to use, people
      won't give it a second glance. It's as simple as that. Where can I sign
      up? We're glad you asked! Of course, feel free to check out the tool
      without signing up. If you're interested in receiving product update
      emails detailing our progress, though, feel free to give us your email via
      the feedback submission form, and we'd love to keep you up-to-date! When
      will [my super important feature] be available? Obviously there are no
      guarantees in product development, but tell us what you're looking for
      here, and we'll see what we can do! After all, we can only know what you
      want if you tell us. (We're not mind readers over here!) And, if you
      provide your email in that feedback form, we can let you know if/when we
      eventually have [insert amazing new feature here]. Of course, we promise
      we won't sell your email, but don't be surprised if we reach out for
      further thoughts! Thanks for checking us out! -The Cobbl.io TeamHow do I
      use this thing? Just start adding fields above! Click, go keyboard-only,
      it's up to you. Once you add at least one field, we'll automatically show
      you a preview of what your random data will look like. When you're
      finished with your dataset, go ahead and download it, and use it wherever
      you need it! What are we aiming to do here? With Cobbl.io, our goal is to
      make it as simple as possible to bring your projects to life with
      realistic (but fake!) data. Maybe you have a project that, yeah, it looks
      fine, but it's missing that sense of realism. Sure, you could manually
      generate a bunch of random data to fill into your design or app, but ugh
      you've done that before and you just don't have the time. Maybe real data
      is not accessible, or you can't pull it in real-time, or you're just not
      allowed to use live customer information. Whatever the reason, that's
      where Cobbl.io comes in. We're here to solve that
      I-just-need-to-show-what-my-work-realistically-looks-like data problem.
      Who is this for? Maybe you're a software engineer that needs to test the
      new UI with some notional data, or you're a UX designer that needs to see
      what your mock looks like with some sample data, or you're a sales
      engineer that needs to show a prospect what the product looks like with
      "real" data, or you're a data scientist that needs a bunch of random data
      to play with, or you're a product manager that needs some realistic data
      to express your new idea. We've all been there! There's no time to spare
      to generate that data, you just want to focus on the core work. At
      Cobbl.io, we agree with you! Focus on that core work, and let us take care
      of plugging in some prototypical data for you. Why Cobbl.io? There are
      other random data generators out there - go ahead, Google them, we'll
      still be here! The thing is, we just didn't fall in love with any of the
      solutions we could find. And you know what? We want our users to fall in
      love with our product. We want them to enjoy using our product. We want
      them to run to their friends and colleagues to tell them about this
      awesome super useful tool they discovered. (Is that so much to ask?!) In
      other words, we think user experience is just as important as utility.
      After all, if the product is too hard or just not enjoyable to use, people
      won't give it a second glance. It's as simple as that. Where can I sign
      up? We're glad you asked! Of course, feel free to check out the tool
      without signing up. If you're interested in receiving product update
      emails detailing our progress, though, feel free to give us your email via
      the feedback submission form, and we'd love to keep you up-to-date! When
      will [my super important feature] be available? Obviously there are no
      guarantees in product development, but tell us what you're looking for
      here, and we'll see what we can do! After all, we can only know what you
      want if you tell us. (We're not mind readers over here!) And, if you
      provide your email in that feedback form, we can let you know if/when we
      eventually have [insert amazing new feature here]. Of course, we promise
      we won't sell your email, but don't be surprised if we reach out for
      further thoughts! Thanks for checking us out! -The Cobbl.io Team
      <nav className=" fixed-bottom navbar-light bg-light">
        <div className="row text-center p-2 pt-3">
          <div className="col-3">
            <Link to="/" onClick={clickHome}>
              <HiOutlineHome size={30} className={isHome ? "active" : ""} />
              <p className={isHome ? "menufont active" : "menufont"}>home</p>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/shops" onClick={clickShops}>
              <BiStore size={30} className={isShops ? "active" : ""} />
              <p className={isShops ? "menufont active" : "menufont"}>shops</p>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/profile" onClick={clickProfile}>
              <CgProfile size={30} className={isProfile ? "active" : ""} />
              <p className={isProfile ? "menufont active" : "menufont"}>
                profile
              </p>
            </Link>
          </div>
          <div className="col-3">
            <Link to="/cart" onClick={clickCart}>
              <BsCart4 size={30} className={isCart ? "active" : ""} />
              <p className={isCart ? "menufont active" : "menufont"}>cart</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;
